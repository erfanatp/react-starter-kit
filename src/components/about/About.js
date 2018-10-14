import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';

class About extends Component {
    render() {
        return (
            <div>
                <MetaTags>
                    <title>About page</title>
                    <meta name="description" content="Some description." />
                    <meta property="og:title" content="MyApp" />
                    <meta property="og:image" content="path/to/image.jpg" />
                </MetaTags>
                <p>This is about page.</p>
            </div>
        );
    }
}

export default About;