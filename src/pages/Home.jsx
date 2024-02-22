import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { client } from '../lib/createClient';
import { Link } from "react-router-dom";


const Home = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client
            .getEntries({
                content_type: 'blogCategory',
                order: 'sys.createdAt'
            })
            .then((entries) => {
                setCategories(entries.items);
            });

        client
            .getEntries({
                content_type: 'blogPost',
                limit: 5,
                order: '-sys.createdAt'
            })
            .then((entries) => {
                setPosts(entries.items);
            });
    }, []);

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <main className="col-md-8">
                            <h1 className="my-3">Últimos posts</h1>

                            {posts.map((post) => {
                                return (
                                    <div className="card mb-3" key={post.sys.id}>
                                        <div className="card-body">
                                            <h5 className="card-title">{post.fields.postTitle}</h5>
                                            <p className="card-text">{post.fields.postDescription}</p>
                                            <Link to={`/post/${post.fields.postSlug}`} className="card-link">
                                                Ver post
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}

                            <Link to={`/posts`} className="btn btn-primary">
                                Ver todos os post
                            </Link>
                        </main>

                        <aside className="col-md-4">
                            <h2>Categorias</h2>
                            <ul>
                                {categories.map((category) => {
                                    return (
                                        <li key={category.sys.id}>{category.fields.categoryTitle}</li>
                                    );
                                })}
                            </ul>
                        </aside>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home;