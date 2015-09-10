package nl.info.mercury.sample.repositories;

import nl.info.mercury.sample.model.Location;

public class LocationRepositoryStub implements LocationRepository {

	/* (non-Javadoc)
	 * @see nl.info.mercury.sample.repositories.LocationRepository#findLocation()
	 */
	@Override
	public Location findLocation() {
		return new Location("somewhere", (float) 51.915299, (float) 4.480712);
	}
}
