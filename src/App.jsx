import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    <Post
                        author="Julia Santi"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor, cum laudantium repellat, quaerat ducimus tempora labore expedita ipsam dicta recusandae? Quasi voluptate sunt sequi perspiciatis, soluta quaerat consequatur delectus?"
                    />

                    <Post author="Diego Fernandes" content="Post legal" />
                </main>
            </div>
        </div>
    );
}

export default App;
