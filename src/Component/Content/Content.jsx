import * as React from 'react';
const VALUE = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'


class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getPageContent: [],
        }
    }
    async componentDidMount() {
        const data = await fetch(VALUE);
        const pageContent = await data.json();
        console.log('pageContent result', pageContent)
        const sortedResult = pageContent.sort((a, b) => a.stepNumber - b.stepNumber);
        this.setState({ getPageContent: sortedResult });
    }
    render() {
        return (
            <main>
                <section class="servicesWrap">
                    <div class="wrapper">
                        <h2 class="title">How It Works</h2>
                        <div class="boxWrap">
                            {this.state.getPageContent.map((item) =>
                                <div class="itemBox">
                                    <div class="servicesText">
                                        <span class="num">0{item.stepNumber}</span>
                                        <h3>{item.versionContent[0].title}</h3>
                                        <p>{item.versionContent[0].body}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Content;