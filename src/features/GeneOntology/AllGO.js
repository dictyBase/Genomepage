// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchData } from "./goActions"
import DisplayTable from "./DisplayTable"
import WithGoDataRendering from "./WithGoDataRendering"
import { Wrapper, GoHeaderStyle } from "styles/style"

type Props = {
  /** The data fetched from the API */
  data: Object,
  /** Check if items could not be loaded */
  hasErrored: boolean,
  /** Check if page is loading */
  isLoading: boolean,
  /** Action creator that accepts URL as parameter */
  fetchData: Function
}

/**
 * Fetches and shares all of the GO data
 */

export class AllGO extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <GoHeaderStyle>
          <h3>Molecular Function</h3>
        </GoHeaderStyle>
        <DisplayTable data={this.props.data} />
        <br />
        <GoHeaderStyle>
          <h3>Biological Process</h3>
        </GoHeaderStyle>
        <DisplayTable data={this.props.data} />
        <br />
        <GoHeaderStyle>
          <h3>Cellular Composition</h3>
        </GoHeaderStyle>
        <DisplayTable data={this.props.data} />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    hasErrored: state.dataHasErrored,
    isLoading: state.dataIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithGoDataRendering(AllGO)
)
