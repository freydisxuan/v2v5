export const POSTS_QUERY = `*[_type == "post"]`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug]{ title, body, "imageUrl": image.asset-> url }[0]`;

export const FRONTPAGE_QUERY = `*[_type == "frontpage"][0]`;