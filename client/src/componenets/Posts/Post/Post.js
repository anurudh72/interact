import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import useStyles from './styles'
import { deletePost, likePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card} typographyColor="red">
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2" style={{
                    fontSize: 'medium', fontFamily: 'cursive'
                }}>{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2" >{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" style={{
                    fontSize: 'large', color:'black', fontFamily: 'helvetica'
                }}>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="large" style={{ color: 'green'}} onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="large" />  <pre> Likes </pre><strong>    {post.likeCount}</strong> </Button>
                
                <Button size="medium" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                <DeleteIcon fontSize="medium" /> Delete</Button>
            </CardActions>
        </Card>
    );
}
export default Post