import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Messenger({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path d="M16,2C8.113,2,2,7.777,2,15.58c0,4.082,1.673,7.608,4.397,10.044,.229,.205,.367,.491,.376,.798l.076,2.49c.024,.794,.845,1.311,1.572,.99l2.779-1.227c.236-.104,.5-.123,.748-.055,1.277,.351,2.636,.538,4.053,.538,7.887,0,14-5.777,14-13.58S23.887,2,16,2Zm8.407,10.449l-4.113,6.525c-.654,1.038-2.055,1.296-3.037,.56l-3.271-2.453c-.3-.225-.713-.224-1.012,.003l-4.418,3.353c-.59,.447-1.359-.258-.965-.884l4.113-6.525c.654-1.038,2.055-1.296,3.037-.56l3.271,2.453c.3,.225,.713,.224,1.012-.003l4.417-3.353c.59-.447,1.359,.258,.965,.884Z" />
      </g>
    </svg>
  );
}

export default Messenger;
