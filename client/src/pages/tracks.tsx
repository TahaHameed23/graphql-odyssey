import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__/";
import { useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
/** TRACKS query to retrieve all tracks */
const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <QueryResult loading={loading} error={error} data={data}>
      <Layout grid>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
