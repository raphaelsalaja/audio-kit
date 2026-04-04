import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePlay({
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
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-1.972,7.648l-3.65,2.129c-.118,.069-.248,.104-.378,.104-.128,0-.256-.034-.374-.101-.236-.135-.376-.378-.376-.65V6.871c0-.272,.141-.515,.376-.65,.236-.136,.517-.134,.751,.002l3.65,2.129c.233,.136,.373,.378,.373,.648s-.139,.512-.373,.648Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquarePlay;
