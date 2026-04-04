import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldHalved2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m10.535,1.807L6.285.057c-.182-.075-.389-.075-.57,0L1.465,1.807c-.281.116-.465.39-.465.693v4.969c0,2.676,3.479,4.085,4.543,4.452.149.053.304.079.458.079.153,0,.306-.026.453-.078,1.066-.368,4.546-1.778,4.546-4.454V2.5c0-.304-.184-.578-.465-.693Zm-1.035,5.663c0,1.339-1.904,2.473-3.464,3.036-.016-.006-.034-.013-.05-.019.002-.024.014-.045.014-.069V1.561l3.5,1.441v4.467Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ShieldHalved2;
