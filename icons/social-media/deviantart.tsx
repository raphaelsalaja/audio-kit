import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Deviantart({
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
        <path d="M24.403,2h-4.82l-.514,.511-2.452,4.68-.716,.413H7.597v6.995h4.437l.462,.462-4.899,9.351v5.588h0l4.823-.002,.516-.513,2.457-4.682,.701-.405h8.309v-6.991h-4.45l-.45-.45,4.901-9.356" />
      </g>
    </svg>
  );
}

export default Deviantart;
