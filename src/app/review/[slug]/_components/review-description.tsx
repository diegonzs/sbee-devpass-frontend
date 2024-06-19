import ReactMarkdown from 'react-markdown'

const MOCK_CONTENT = `
### Heading Title

Tempus egestas interdum facilisis varius curabitur. Sit amet lorem libero nisl sagittis quam lectus eu venenatis. Vehicula mauris tortor enim massa dui lectus. Amet lorem orci facilisis orci consectetur at. Montes in leo ullamcorper eleifend non. Odio congue dictum lectus aliquam enim amet. Ut in nulla integer dignissim elementum etiam gravida sed morbi. Ultricies vel ridiculus ultricies arcu habitasse integer suscipit. Ornare cras purus est convallis aliquet enim turpis consectetur. Cursus amet a suspendisse luctus nisl turpis in pellentesque. Condimentum odio ut est aliquam.

Lectus donec consectetur sollicitudin egestas sit a ut. Fermentum id eget tincidunt lacinia eleifend nunc vulputate. Mauris quam purus leo metus. Velit quam nunc est maecenas. Sed facilisi gravida diam enim egestas in bibendum volutpat mauris. Imperdiet ultricies pellentesque cursus pellentesque dolor tortor purus. Facilisis justo sit quisque urna accumsan ut commodo tincidunt molestie. Morbi sed eu quam etiam. Arcu amet velit morbi aliquam commodo. Eget morbi orci sed nisl. Habitant phasellus accumsan sollicitudin massa vestibulum. Fames nunc porttitor condimentum enim laoreet dictumst arcu egestas id. Ipsum etiam in blandit egestas tortor. At nulla massa ipsum eget sed suspendisse in tristique at.

- Id augue mauris mattis vestibulum sit purus eget.

- Nisi aliquam aliquam duis semper vel metus.

- Neque leo eros phasellus malesuada nisl dignissim.

- Facilisis feugiat nec lacus nec ipsum nisi ultrices nulla.

- Sed in quam sit vulputate risus tincidunt sit.

- Eu tellus amet luctus porttitor semper in.

Pretium in tortor eget lectus interdum. Netus pellentesque egestas velit tellus. Luctus egestas dolor magna ut eget. Nibh leo ut nibh aenean ullamcorper amet. Malesuada quam proin mauris at elit sit. Eu cursus tortor turpis tellus. Quam turpis donec volutpat egestas lectus volutpat dolor. Est sapien pulvinar at mauris quam nulla magnis cras nibh. Lacinia quis integer egestas aliquet mattis etiam purus. Arcu bibendum leo ut amet faucibus.

Ut nibh dolor viverra fames ut. Eleifend eleifend pharetra sed ipsum id. Eget sed porttitor nulla mollis ornare dui nulla sem erat. Lectus lobortis in nec tellus ultrices facilisis urna. Ut faucibus et nec quis consectetur fames suspendisse vitae. Magna accumsan quam ut adipiscing euismod. Vestibulum amet dignissim ac vitae lacus. Suspendisse ipsum in.
`

export const ReviewDescription = () => {
  return (
    <div className="markdown">
      <ReactMarkdown>{MOCK_CONTENT}</ReactMarkdown>
    </div>
  )
}
