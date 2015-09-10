package nl.info.mercury.sample.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Location {

	private String description;
	private float longitude;
	private float latitude;
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getLongitude() {
		return longitude;
	}

	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}

	public float getLatitude() {
		return latitude;
	}

	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}

	public Location(String desc, float lon, float lat) {
		description = desc;
		longitude = lon;
		latitude = lat;
	}
}
