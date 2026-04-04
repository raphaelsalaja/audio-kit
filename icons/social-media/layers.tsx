import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Layers({
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
        <path
          d="M2.424,17.977l.068-10.18c.012-1.843,1.301-3.423,3.08-3.775l9.831-1.949c2.362-.468,4.555,1.38,4.539,3.827l-.068,10.182c-.013,1.842-1.302,3.421-3.081,3.774l-9.831,1.949c-2.362,.468-4.555-1.38-4.539-3.828Z"
          opacity=".2"
        />
        <path
          d="M7.241,22.039l.068-10.182c.011-1.841,1.301-3.42,3.08-3.773l9.831-1.948c2.362-.468,4.555,1.38,4.539,3.827l-.068,10.182c-.012,1.842-1.301,3.421-3.08,3.774l-9.831,1.949c-2.362,.468-4.555-1.38-4.539-3.827v-.002Z"
          opacity=".5"
        />
        <path
          d="M12.058,26.1l.068-10.182c.012-1.843,1.301-3.421,3.08-3.774l9.831-1.949c2.362-.468,4.555,1.38,4.539,3.827l-.068,10.182c-.012,1.843-1.301,3.422-3.08,3.774l-9.831,1.949c-2.362,.468-4.555-1.38-4.539-3.827h0Z"
          opacity=".8"
        />
      </g>
    </svg>
  );
}

export default Layers;
