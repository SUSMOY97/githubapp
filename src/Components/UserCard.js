import React from "react" ; 


import {Card , CardBody} from "reactstrap" ; //

const UserCard = ({user}) => {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="ig-thumbnail" alt=""/>
            <CardBody className="gradient">
                <div className="text-white">{user.name}</div>
                <div className="text-white">{user.location}</div>
                <div className="text-white">{user.bio}</div>
                <div className="text-white">{user.blog}</div>
                <div className="text-white">{user.company}</div>
                <div className="text-white">Available for Hire: {user.hireable? 'YES' : 'NOPE'}</div>
                <div className="text-white">Followers: {user.followers}</div>

                
            </CardBody>
        </Card>
    )


}




export default UserCard ; 