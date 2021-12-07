import { Container } from "@mui/material";
const Search = () => {
    return (
        <>
            <Container>
                    <form>
                        <input type="search" placeholder="Search" required />
                        <i className="fa fa-search"></i>
                    </form>
            </Container>
            <style jsx>{`
             form{
                 position:absolute;
                 z-index:1;
                 bottom:-10px;
                 left:48%;
                 right:52%;
                margin-top:5rem;
                transform: translate(-10%,-40%);
                transition: all .7s;
                width: 50px;
                height: 50px;
                background: #FFF;
                box-sizing: border-box;
                border-radius: 25px;
                border: 4px solid white;
                padding: 5px;
            }
            input{
                width: 100%;
                height: 42.5px;
                line-height: 30px;
                outline: 0;
                border: 0;
                display: none;
                font-size: 1em;
                border-radius: 20px;
                padding: 0 20px;
            }
            .fa{
                box-sizing: border-box;
                padding: 10px;
                width: 42.5px;
                height: 42.5px;
                position: absolute;
                top: 0;
                right: 0;
                border-radius: 50%;
                background-color: #000;
                color: #FFF;
                text-align: center;
                font-size: 1.2em;
                transition: all 0.7s ease;
            }
            form:hover,
            form:valid{
                width: 180px;
                cursor: pointer;
            }
            form:hover input,
            form:valid input{
                display: block;
            }
            form:hover .fa,
            form:valid .fa{
                background: #FFF;
                color: #000;
            }
            @media(min-width:768px){
            form{
                position: static;
                margin: 0 auto;
                margin-top:5rem;
                transform: translate(-10%,-50%);
                transition: all .7s;
                width: 50px;
                height: 50px;
                background: #FFF;
                box-sizing: border-box;
                border-radius: 25px;
                border: 4px solid white;
                padding: 5px;
            }

            input{
                width: 100%;
                height: 42.5px;
                line-height: 30px;
                outline: 0;
                border: 0;
                display: none;
                font-size: 1em;
                border-radius: 20px;
                padding: 0 20px;
            }
            .fa{
                box-sizing: border-box;
                padding: 10px;
                width: 42.5px;
                height: 42.5px;
                position: absolute;
                top: 0;
                right: 0;
                border-radius: 50%;
                background-color: #000;
                color: #FFF;
                text-align: center;
                font-size: 1.2em;
                transition: all 0.7s ease;
            }
            form:hover,
            form:valid{
                width: 400px;
                cursor: pointer;
            }
            form:hover input,
            form:valid input{
                display: block;
            }
            form:hover .fa,
            form:valid .fa{
                background: #FFF;
                color: #000;
            }
        }

`}</style>
        </>
    );
}

export default Search;