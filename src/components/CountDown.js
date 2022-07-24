import { clear } from "@testing-library/user-event/dist/clear";
import React, { Component, useState, useEffect } from "react";

class CountDown extends Component {
    state = { count: 5 };

    componentDidMount() {
        // setTimeout(() => {
        //     console.log("me");
        // }, 1000);
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1,
            });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                // this.props.onTimeup();
            }
        }
    }

    render() {
        return <div>{this.state.count}</div>;
    }
}

const NewCountDown = (props) => {
    const [count, setCount] = useState(5);

    useEffect(() => {
        if (count === 0) {
            props.onTimeup();
            return;
        }

        let timer = setInterval(() => {
            console.log("run me");
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [count]); // count thay doi thi chay vao day

    return <div>{count} hooks</div>;
};

export { CountDown, NewCountDown };
