import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';

class Home extends Component {
    render() {
        return (
            <div>
                <MetaTags>
                    <title>Home page</title>
                    <meta name="description" content="Some description." />
                    <meta property="og:title" content="MyApp" />
                    <meta property="og:image" content="path/to/image.jpg" />
                </MetaTags>
                <br/>
                <div className="row justify-content-center">
                    <div className="col card">
                        <h1>Hi,</h1>
                        <p>This is bootstrap react starter.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;