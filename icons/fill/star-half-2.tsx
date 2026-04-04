import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarHalf2({
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
          d="M9.17,1.02c-.342-.078-.688,.086-.843,.398l-2.066,4.186-4.62,.671c-.282,.041-.517,.239-.605,.51-.088,.271-.015,.57,.19,.769l3.343,3.258-.789,4.601c-.048,.282,.067,.566,.298,.734,.131,.095,.286,.143,.441,.143,.12,0,.239-.028,.349-.086l4.48-2.356c.247-.129,.401-.385,.401-.664V1.75c0-.349-.24-.651-.58-.73Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StarHalf2;
