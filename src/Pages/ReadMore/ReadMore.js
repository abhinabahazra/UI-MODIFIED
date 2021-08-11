import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import swal from 'sweetalert';
import "./ReadMore.css";


const userInitvalue = {
    player1: ''
}

class ReadMore extends Component {



    constructor(props) {
        super(props);
        this.state = {
            userDetails: userInitvalue,
            movie_id: "",
            movie_title: "",
            movie_price: "",
            banner: "",
            genre: "",
            language: "",
            duration: "",
            category: ""


        }

    }

    // getWalletBalance = async () => {
    //     if (sessionStorage.getItem('auth')) {
    //         let { num_user_id,name,num_mobile_no,txt_emailid } = JSON.parse(sessionStorage.getItem('auth'));
    //         //  console.log("abhinab",JSON.parse(sessionStorage.getItem('auth')))

    //         await axios.post('www.api3.digimovieplex.com/api/getUserWalletBalanceById', { user_id: num_user_id }).then((res) => {
    //             if (res.data.status === 'success') {
    //                 this.setState({
    //                     wallet_balance: res.data.response.cur_balance_amount
    //                 })
    //             }
    //         });
    //     }
    // }

    getMovieCastById = async (movieId) => {
        let data = {
            movie_id: movieId

        }
        console.log("sssssssssssssssssss", data)
        await axios.post('www.api3.digimovieplex.com/api/getMoviePlayerDetails', data).then((res) => {
            console.log("avhi", res.data.response.txt_player1);
            if (res.data.status === 'success') {
                this.setState({
                    userDetails: {
                        player1: res.data.response.txt_player1,

                    }
                })
            }
        })


    }




    componentDidMount() {
        let { id } = this.props.match.params;
        console.log("aaaaaa", JSON.parse(decodeURIComponent(id)))
        let params = JSON.parse(decodeURIComponent(id));
        this.setState({ movie_id: params.mid, category: params.mcat, movie_title: params.mtitle, movie_price: params.mprice, genre: params.mgenre, language: params.mlanguage, duration: params.mmin, banner: params.mpic, }, () => {
            this.getMovieCastById(this.state.movie_id);
        });


        // this.hashGenerate();
    }



    render() {
        return (
            <div>
                <div className="container-fluid">
                    <h1 className="heading">
                        Movie Information
                    </h1>
                    <Grid container spacing={2} className="fade_back">
                        <Grid className="card" id="new_lab" item xs={12} sm={7}>
                            <h2>{this.state.movie_title}</h2>
                            <h2>ccccc{this.state.userDetails.player1}</h2>
                            <p>{this.state.category} | {this.state.language} | {this.state.genre} | {this.state.duration} Minutes</p>
                            <h4>Ticket Price</h4>
                            <h5>Rs.{this.state.movie_price}</h5>
                        </Grid>
                        <Grid item xs={12} sm={5} className="fade_back_img">
                            <img className="readmore_img" src={`www.api3.digimovieplex.com/${this.state.banner}`} />
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }
}

export default ReadMore;