import { gql } from '@apollo/client';

export const TEST_QUERY = gql`query TestQuery {
	test {
	  id
	  sometext
	}
  }`;


export const TEST_SUBSCRIPTION = gql`subscription TestSubscription {
	test {
	  id
	  sometext
	}
  }`;

  