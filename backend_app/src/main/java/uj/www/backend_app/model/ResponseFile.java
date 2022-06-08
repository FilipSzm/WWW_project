package uj.www.backend_app.model;

public record ResponseFile(
        String name,
        String url,
        String type,
        long size
) { }
