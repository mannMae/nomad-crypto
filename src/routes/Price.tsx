import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

interface TickersData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps{
  coinId:string;
}
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  margin:0;
`;


const Loader = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  align-items: center;
  color:${props=>props.theme.textColor};

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margon: 20px 0;
  color:${props=>props.theme.textColor};
`;

function Price({coinId} :PriceProps) {
  const { isLoading, data } =
    useQuery<TickersData>(["tickers", coinId], () => fetchCoinTickers(coinId), {
      refetchInterval: 5000,
    });
    console.log(data);
  return (<>
  <Title>Price</Title>
  {!data?<Loader>Loading...</Loader>:<Wrapper>
  {Object.keys(data.quotes.USD).map((p, i)=><Overview key={i}>
  <OverviewItem>
      {p}
      </OverviewItem>
      <OverviewItem>
      {Object.values(data.quotes.USD)[i]}
      </OverviewItem>
      </Overview>)}
    </Wrapper>}
  </>)
}

export default Price;
