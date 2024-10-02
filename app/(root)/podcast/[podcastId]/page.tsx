const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return (
    <div>
      <p className="text-black-1">PodcastDetails:{params.podcastId}</p>
    </div>
  );
};

export default PodcastDetails;
