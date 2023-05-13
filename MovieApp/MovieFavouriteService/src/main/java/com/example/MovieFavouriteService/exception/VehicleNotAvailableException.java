package com.example.MovieFavouriteService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Vehicle is not available with the given vehicleId")
public class VehicleNotAvailableException extends Exception {
}
