export type Coin = {
    id: string;
    name: string;
    categories: string[];
    links:{
        homepage: string[],
        whitepaper: string[];
        blockchain_site: string[];
        official_forum_url: string[];
        chat_url:string[];
        announcement_url:string[];
        twitter_screen_name: string;
        facebook_username: string;
        subreddit_url: string;
        repos_url:{
            github:string[],
            bitbucket:string[]
        },
    },
    image:{
        thumb:string;
        small:string;
        large: string;
    },
    country_origin: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    market_cap_rank: number;
    market_data: {
        current_price:{
            usd: number
        },
        market_cap:{
            usd: number
        },
        market_cap_rank: number;
        market_cap_fdv_ratio: number;
        high_24h:{
            usd: number;
        }
        low_24h:{
            usd: number;
        }
    }
}

export type OHLCData = (number[])[]
export type MarketData = {
    prices:(number[])[];
    market_caps:(number[])[];
    total_volumes:(number[])[];
}