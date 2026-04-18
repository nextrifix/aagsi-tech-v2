# Use Nginx alpine as base image
FROM nginx:alpine

# Copy the exported static files from the build step to Nginx's default public directory
# (Note: You must run `npm run build` before building this Docker image)
COPY out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
