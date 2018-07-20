import {
  SET_NEWSLETTERS,
  FETCH_NEWSLETTER_ID
} from './types';

export function fetchNewsletters() {
  
  const response = {
    data: [
      {
        _id: 1337,
        title: 'Happy Holidays',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tellus consequat, viverra odio quis, congue nisi. Proin metus justo, feugiat at diam eu, imperdiet ullamcorper ex. Cras congue semper felis, a suscipit elit tincidunt ac. Donec pharetra luctus ligula, at fringilla tellus. Curabitur volutpat sodales elit at bibendum. Nulla ut nibh nec arcu mattis ultricies eget a risus. Vivamus vel vulputate orci, interdum imperdiet dolor. Pellentesque aliquam risus non sapien fringilla, at venenatis tortor efficitur. Fusce finibus ex mauris, non eleifend sapien sodales id. Quisque sed euismod leo. Nulla sollicitudin vestibulum urna. In consequat egestas nisl, sit amet tristique sem egestas eget. Vivamus ut neque ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent metus purus, porttitor sed est vel, vestibulum posuere diam. Curabitur pharetra eros eu ligula interdum, et porttitor arcu imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum diam lobortis arcu pellentesque, quis vehicula dui pulvinar. Praesent eu augue lacus. Phasellus non mauris at lacus maximus eleifend et eu nisl. Ut venenatis turpis ut mollis fringilla. Etiam ac arcu erat. Pellentesque tincidunt enim id eros semper tristique. Praesent sed sagittis nisi, non varius magna. Cras elit orci, convallis ac vehicula nec, vehicula eu dui. Ut vitae nulla pretium, egestas neque ut, vulputate justo. Morbi at tempor orci. Morbi scelerisque mollis mauris et venenatis. Integer lacus urna, consequat quis mauris ac, pulvinar venenatis lectus. Donec sodales mauris ut nisl lobortis, ut accumsan diam ornare. Quisque porta lectus metus, et iaculis ex ultrices vel. Donec arcu mi, rutrum quis venenatis et, ultricies vitae orci. Proin tellus metus, accumsan sit amet orci eget, lacinia sollicitudin nunc. Nunc tempus nibh quis magna luctus, at mattis felis vestibulum. Etiam rhoncus euismod nibh ut sollicitudin. Maecenas in massa elit.',
        date: new Date(),
        imageURL: 'http://via.placeholder.com/960x258'
      },
      {
        _id: 42,
        title: 'Second Newsletter',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tellus consequat, viverra odio quis, congue nisi. Proin metus justo, feugiat at diam eu, imperdiet ullamcorper ex. Cras congue semper felis, a suscipit elit tincidunt ac. Donec pharetra luctus ligula, at fringilla tellus. Curabitur volutpat sodales elit at bibendum. Nulla ut nibh nec arcu mattis ultricies eget a risus. Vivamus vel vulputate orci, interdum imperdiet dolor. Pellentesque aliquam risus non sapien fringilla, at venenatis tortor efficitur. Fusce finibus ex mauris, non eleifend sapien sodales id. Quisque sed euismod leo. Nulla sollicitudin vestibulum urna. In consequat egestas nisl, sit amet tristique sem egestas eget. Vivamus ut neque ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent metus purus, porttitor sed est vel, vestibulum posuere diam. Curabitur pharetra eros eu ligula interdum, et porttitor arcu imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum diam lobortis arcu pellentesque, quis vehicula dui pulvinar. Praesent eu augue lacus. Phasellus non mauris at lacus maximus eleifend et eu nisl. Ut venenatis turpis ut mollis fringilla. Etiam ac arcu erat. Pellentesque tincidunt enim id eros semper tristique. Praesent sed sagittis nisi, non varius magna. Cras elit orci, convallis ac vehicula nec, vehicula eu dui. Ut vitae nulla pretium, egestas neque ut, vulputate justo. Morbi at tempor orci. Morbi scelerisque mollis mauris et venenatis. Integer lacus urna, consequat quis mauris ac, pulvinar venenatis lectus. Donec sodales mauris ut nisl lobortis, ut accumsan diam ornare. Quisque porta lectus metus, et iaculis ex ultrices vel. Donec arcu mi, rutrum quis venenatis et, ultricies vitae orci. Proin tellus metus, accumsan sit amet orci eget, lacinia sollicitudin nunc. Nunc tempus nibh quis magna luctus, at mattis felis vestibulum. Etiam rhoncus euismod nibh ut sollicitudin. Maecenas in massa elit.',
        date: new Date(),
        imageURL: 'http://via.placeholder.com/960x258'
      }
    ]
  };
  
  return {
    type: SET_NEWSLETTERS,
    payload: response.data
  };
}

export function fetchNewsletterWithId(id) {
  return {
    type: FETCH_NEWSLETTER_ID,
    payload: id
  };
}