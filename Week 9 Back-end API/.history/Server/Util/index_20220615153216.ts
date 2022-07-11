import express from 'express';

// convenience function to return the DisplayName of the User
export function UserDisplayName(req: Express.Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument
        return user.DisplayName.toString();
    }
    return '';
}