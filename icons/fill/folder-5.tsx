import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder5({
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
          d="M2.5,7.75H1V3.75c0-.965,.785-1.75,1.75-1.75h3.797c.505,0,.986,.218,1.318,.599l2.324,2.657-1.129,.987-2.325-2.658c-.048-.055-.116-.085-.188-.085H2.75c-.138,0-.25,.112-.25,.25V7.75Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,16H3.75c-1.517,0-2.75-1.233-2.75-2.75V7.75c0-1.517,1.233-2.75,2.75-2.75H14.25c1.517,0,2.75,1.233,2.75,2.75v5.5c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Folder5;
