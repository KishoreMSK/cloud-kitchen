  export default {
    data: () => ({
        rules: [
          value => !!value || 'Required.',
          value => (value && value.length >= 10) || 'Min 10 characters',
        ],
      }),
    
  }
