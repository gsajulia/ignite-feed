export function Post({ author, content }) {
    return (
        <>
            <strong>{author}</strong>
            <div>{content}</div>
        </>
    );
}
