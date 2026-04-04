import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldKey({
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
          d="M9.30469 1.84838C9.1058 1.78545 8.8932 1.78545 8.69531 1.84838L3.44531 3.52807C3.03131 3.66007 2.75 4.04522 2.75 4.48022V10.9997C2.75 14.0297 7.43438 15.748 8.69238 16.155C8.89516 16.2209 9.10484 16.2209 9.30762 16.155C9.74536 16.0134 12.9328 14.4108 14.1088 13.4591L13.7483 12.8288C12.8057 13.3573 11.7961 13.4997 10.5 13.4997C8.15281 13.4997 6.25 11.597 6.25 9.24975C6.25014 6.90265 8.15287 4.99975 10.5 4.99975C12.5565 4.99975 13.8497 5.65997 14.6445 6.68142C15.2511 7.46109 15.2501 4.73438 15.25 4.4874L15.25 4.48022C15.25 4.04622 14.9687 3.66107 14.5547 3.52807L9.30469 1.84838Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 6.25V4.48C15.25 4.045 14.969 3.66 14.555 3.528L9.30499 1.848C9.10699 1.785 8.89401 1.785 8.69501 1.848L3.44501 3.528C3.03101 3.661 2.75 4.045 2.75 4.48V11C2.75 14.03 7.434 15.749 8.692 16.155C8.895 16.221 9.105 16.221 9.308 16.155C10.17 15.876 12.642 14.98 14.112 13.469"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 11.25C11.6046 11.25 12.5 10.3546 12.5 9.25C12.5 8.14543 11.6046 7.25 10.5 7.25C9.39543 7.25 8.5 8.14543 8.5 9.25C8.5 10.3546 9.39543 11.25 10.5 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 9.25H17"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 9.25V10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ShieldKey;
