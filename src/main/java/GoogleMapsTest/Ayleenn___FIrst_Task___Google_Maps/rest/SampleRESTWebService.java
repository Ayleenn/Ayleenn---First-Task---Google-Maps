package GoogleMapsTest.Ayleenn___FIrst_Task___Google_Maps.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.google.inject.Inject;
import com.google.inject.Singleton;
import com.google.inject.name.Named;

@Singleton
@Path("hello")
public class SampleRESTWebService {

	@Inject
	@Named("hello.world.string")
	private String helloWorldString;
	
	@GET
	@Produces("application/json")
	public Response helloWorld(){
		return Response.ok(helloWorldString+"\n").build();
	}
}
