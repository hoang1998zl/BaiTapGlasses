import React, { Component } from 'react'

export default class State extends Component {
    state = {
        style: '1',
    };

    handleChangeStyle(value) {
        this.setState({
            style: value,
        })
    }
    render() {
        return (
            <>
                <div className='background position-relative' style={{ backgroundImage: 'url("./glassesImage/background.jpg")' }}>
                    <h1 className='text-center text-uppercase bg-dark opacity-75 text-white py-3'>
                        Try glass app online
                    </h1>
                    <div className='wrapper d-flex flex-column'>
                        <div className='personImage border position-relative mx-auto'>
                            <img src="./glassesImage/model.jpg" alt="" />
                            <img className='img-glass' src={`./glassesImage/v${this.state.style}.png`} alt="" />
                        </div>

                        <div className='select_glass position-relative my-5'>
                            <div class="container bg-white p-3">
                                <div className='row clearfix'>
                                    <div className='col-2'>
                                        <button type="button" className='p-0 border-0 w-100 bg-transparent' onClick={() => { this.handleChangeStyle("1"); }}>
                                            <img className='img-fluid' src="./glassesImage/g1.jpg" alt="" />
                                        </button>
                                    </div>
                                    <div className='col-2'>
                                        <button type="button" className='p-0 border-0 w-100 bg-transparent' onClick={() => { this.handleChangeStyle("2"); }}>
                                            <img className='img-fluid' src="./glassesImage/g2.jpg" alt="" />
                                        </button>
                                    </div>
                                    <div className='col-2'>
                                        <button type="button" className='p-0 border-0 w-100 bg-transparent' onClick={() => { this.handleChangeStyle("3"); }}>
                                            <img className='img-fluid' src="./glassesImage/g3.jpg" alt="" />
                                        </button>
                                    </div>
                                    <div className='col-2'>
                                        <button type="button" className='p-0 border-0 w-100 bg-transparent' onClick={() => { this.handleChangeStyle("4"); }}>
                                            <img className='img-fluid' src="./glassesImage/g4.jpg" alt="" />
                                        </button>
                                    </div>
                                    <div className='col-2'>
                                        <button type="button" className='p-0 border-0 w-100 bg-transparent' onClick={() => { this.handleChangeStyle("5"); }}>
                                            <img className='img-fluid' src="./glassesImage/g5.jpg" alt="" />
                                        </button>
                                    </div>
                                    <div className='col-2'>
                                        <button type="button" className='p-0 border-0 w-100 bg-transparent' onClick={() => { this.handleChangeStyle("6"); }}>
                                            <img className='img-fluid' src="./glassesImage/g6.jpg" alt="" />
                                        </button>
                                    </div>
                                    <div className='col-2'>
                                        <button type="button" className='p-0 border-0 w-100 bg-transparent' onClick={() => { this.handleChangeStyle("7"); }}>
                                            <img className='img-fluid' src="./glassesImage/g7.jpg" alt="" />
                                        </button>
                                    </div>
                                    <div className='col-2'>
                                        <button type="button" className='p-0 border-0 w-100 bg-transparent' onClick={() => { this.handleChangeStyle("8"); }}>
                                            <img className='img-fluid' src="./glassesImage/g8.jpg" alt="" />
                                        </button>
                                    </div>
                                    <div className='col-2'>
                                        <button type="button" className='p-0 border-0 w-100 bg-transparent' onClick={() => { this.handleChangeStyle("9"); }}>
                                            <img className='img-fluid' src="./glassesImage/g9.jpg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
