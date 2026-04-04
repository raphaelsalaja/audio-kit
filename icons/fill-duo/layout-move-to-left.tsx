import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutMoveToLeft({
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
          d="M14.2501 2H3.75009C2.23131 2 1.00009 3.23122 1.00009 4.75V13.25C1.00009 14.7688 2.23131 16 3.75009 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.75009 5C4.33599 5 4.00009 5.3359 4.00009 5.75V12.25C4.00009 12.6641 4.33599 13 4.75009 13C5.16419 13 5.50009 12.6641 5.50009 12.25V5.75C5.50009 5.3359 5.16419 5 4.75009 5Z"
          fill={fill}
        />
        <path
          d="M12.7501 8.24999H10.0606L10.9014 7.40917C11.1944 7.11617 11.1944 6.64158 10.9014 6.34868C10.6084 6.05578 10.1338 6.05568 9.8409 6.34868L7.71981 8.46977C7.42681 8.76277 7.42681 9.23736 7.71981 9.53026L9.8409 11.6514C9.9874 11.7979 10.1793 11.8711 10.3712 11.8711C10.5631 11.8711 10.755 11.7979 10.9015 11.6514C11.1945 11.3584 11.1945 10.8838 10.9015 10.5909L10.0607 9.75011H12.7502C13.1643 9.75011 13.5002 9.41421 13.5002 9.00011C13.5002 8.58601 13.1642 8.24999 12.7501 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayoutMoveToLeft;
