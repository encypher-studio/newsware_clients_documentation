---
sidebar_position: 5
---

# Sources

It is possible to filter by news sources, the available sources are:

```typescript
export enum Source {
    DowJones = "DJ",
    AccessWire = "AR",
    GlobeNewswire = "PZ",
    PRNewswire = "PN",
    BusinessWire = "BW",
    SEC = "SEC"
}
```

## Usage

This query will return all news from Dow Jones and Access Wire:

```typescript
import {Api, News, Source} from "newsware";

const api = new Api(apiKey)
api.subscribe({
    filter: {
        sources: [Source.DowJones, Source.AccessWire]
    },
    callback: (news: News) => {
        // Do anything with the filtered news
    }
})
```
