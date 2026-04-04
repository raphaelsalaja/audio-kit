import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Navigation({
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
          d="m9,1C4.5889,1,1,4.5889,1,9c0,3.2178,1.9136,5.9905,4.659,7.2593l3.2473-2.7905,3.6514,2.686c2.6285-1.3125,4.4424-4.0225,4.4424-7.1548,0-4.4111-3.5889-8-8-8Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m13.6431,15.3926l-3.6187-7.7856v-.0005c-.1875-.4028-.5801-.6533-1.0244-.6533s-.8369.2505-1.0244.6538l-3.6182,7.7847c-.2041.438-.1069.9575.2412,1.292.2153.207.4976.3149.7827.3149.1763,0,.3535-.0415.5171-.126l3.1016-1.5972,3.1011,1.5972c.4302.2207.9517.145,1.3003-.189.3481-.3345.4453-.854.2417-1.291Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Navigation;
