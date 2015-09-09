package nl.info.mercury.sample.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("hello")
public class SampleRESTWebService {

	private String helloWorldString;
	
	@GET
	@Produces("application/json")
	public Response helloWorld(){
		return Response.ok(helloWorldString+"\n").build();
	}
}
