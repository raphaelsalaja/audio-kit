import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heading1({
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
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M8.75,4c-.414,0-.75,.336-.75,.75v3.5H3.5v-3.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V13.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-3.5h4.5v3.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.75c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M14.75,14c-.414,0-.75-.336-.75-.75V6.639c-.548,.409-1.261,.786-2.149,.956-.404,.073-.799-.189-.877-.596-.078-.407,.189-.799,.596-.877,1.706-.326,2.521-1.728,2.529-1.742,.168-.296,.512-.442,.844-.354,.329,.087,.558,.385,.558,.725V13.25c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Heading1;
