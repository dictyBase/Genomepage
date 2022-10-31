import Box from "@material-ui/core/Box"
import Skeleton from "@material-ui/lab/Skeleton"

/**
 * Loading screen for Orthologs page
 */
const OrthologsLoader = () => (
  <Box mt={"10px"} data-testid="skeleton-loader">
    {[...Array(10)].map((item, key) => (
      <Skeleton key={key} animation="wave" />
    ))}
  </Box>
)

export default OrthologsLoader
