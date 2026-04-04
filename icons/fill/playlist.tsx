import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Playlist({
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
          d="M13.25,2.5H4.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H13.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75,4H4.25c-1.517,0-2.75,1.233-2.75,2.75v6.5c0,1.517,1.233,2.75,2.75,2.75H13.75c1.517,0,2.75-1.233,2.75-2.75V6.75c0-1.517-1.233-2.75-2.75-2.75Zm-2.587,6.587l-3.14,1.832c-.107,.062-.225,.094-.343,.094-.117,0-.233-.031-.339-.092-.213-.123-.341-.343-.341-.589v-3.663c0-.246,.127-.467,.341-.589,.213-.123,.468-.123,.682,.001l3.14,1.832c.211,.123,.337,.343,.337,.587s-.126,.464-.337,.587Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Playlist;
