import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atom";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: #999;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  list-style: none;
  a {
    display: flex;
    padding: 20px;
    transition: color 0.2s ease-in;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Button = styled.button`
  width:150px;
  height:50px;
  border-radius:10px;
  border:none;
  background-color:${props=>props.theme.accentColor};
  color:white;
  font-weight:700;
  font-size:15px;
  cursor:pointer;
`;

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const respose = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await respose.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);
  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
        <Button onClick={()=> setIsDark(!isDark)}>DarkModeToggle</Button>
      </Header>
      <CoinsList>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{ pathname: `/${coin.id}`, state: { name: coin.name } }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))
        )}
        <Coin></Coin>
      </CoinsList>
    </Container>
  );
}

export default Coins;
