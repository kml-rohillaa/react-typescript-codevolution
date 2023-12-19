export type ProfileProps = {
    name : string
}
export const Profile = ({name} : ProfileProps) => {
    return <div>Profile Component . Name is {name}</div>
}