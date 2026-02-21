import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useDispatch, useSelector } from 'react-redux';
import { Textarea } from './ui/textarea'
import { Button } from './ui/button';
import { LuSend } from 'react-icons/lu'
import axios from 'axios';
import { setComment } from '@/redux/commentSlice';
import { FaRegHeart } from 'react-icons/fa';
import { toast } from 'sonner';
import { setBlog } from '@/redux/blogSlice';



// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"


const CommentBox = ({ selectedBlog }) => {

    const { user } = useSelector(store => store.auth)
    const { comment } = useSelector(store => store.comment)
    const { blog } = useSelector(store => store.blog)
    const [content, setContent] = useState("")
    const dispatch = useDispatch()



    const changeEventHandler = (e) => {
        const inputText = e.target.value;
        if (inputText.trim()) {
            setContent(inputText)
        } else (
            setContent('')
        )
    }


    const commentHandler = async () => {
        try {
            const res = await axios.post(`http://localhost:8000/api/v1/comment/${selectedBlog._id}/create`, { content }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });

            if (res.data.success) {
                let updatedCommentData
                console.log(comment);

                if (comment.length >= 1) {
                    updatedCommentData = [...comment, res.data.comment]
                } else {
                    updatedCommentData = [res.data.comment]
                }
                dispatch(setComment(updatedCommentData))

                const updatedBlogData = blog.map(blog =>
                    blog._id === selectedBlog._id ? { ...blog, comments: updatedCommentData } : blog
                );
                dispatch(setBlog(updatedBlogData))
                toast.success(res.data.message)
                setContent("")
            }

        } catch (error) {
            console.log(error);
            toast.error("comment add nhi hua")
        }
    }


    useEffect(() => {
        const getAllCommentsOfBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/comment/${selectedBlog._id}/comment/all`)
                const data = res.data.comments
                dispatch(setComment(data))

            } catch (error) {
                console.log(error);

            }
        }

        getAllCommentsOfBlog()

    }, [])



    return (
        <div>
            <div className='flex gap-4 mb-4 items-center'>
                <Avatar>
                    <AvatarImage src={user.photoUrl} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className='font-semibold'>{user.firstName} {user.lastName}</h3>
            </div>
            <div className='flex gap-3'>
                <Textarea
                    placeholder="Leave a comment"
                    className="bg-gray-100 dark:bg-gray-800"
                    onChange={changeEventHandler}
                    value={content}
                />
                <Button onClick={commentHandler}><LuSend /></Button>
            </div>
            {
                comment.length > 0 ? <div className='mt-7 bg-gray-100 dark:bg-gray-800 p-5 rounded-md'>
                    {
                        comment.map((item, index) => {
                            return <div key={index} className='mb-4'>
                                <div className="flex items-center justify-between">
                                    <div className='flex gap-3 items-start'>
                                        <Avatar>
                                            <AvatarImage src={item?.userId?.photoUrl} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className='mb-2 space-y-1 md:w-[400px]'>
                                            <h1 className='font-semibold'>{item?.userId?.firstName} {item?.userId?.lastName} <span className='text-sm ml-2 font-light'>yesterday</span></h1>
                                            <p>{item?.content}</p>

                                            <div className='flex gap-5 items-center'>
                                                <div className='flex gap-2 items-center'>
                                                    <div className='flex gap-1 items-center cursor-pointer'>
                                                        <FaRegHeart />
                                                        <span>{item.numberOfLikes}</span>
                                                    </div>
                                                </div>
                                                <p className='text-sm cursor-pointer'>Reply</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })

                    }
                </div> : null
            }
        </div>
    )
}

export default CommentBox



