import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrawFinger({
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
          d="m4.25,8.5c-1.2402,0-2.25-1.0093-2.25-2.25s1.0098-2.25,2.25-2.25h9.5c.4131,0,.75-.3364.75-.75s-.3369-.75-.75-.75h-2.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.5c1.2402,0,2.25,1.0093,2.25,2.25s-1.0098,2.25-2.25,2.25H4.25c-.4131,0-.75.3364-.75.75s.3369.75.75.75c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.0043,10.1658c1.7944-.4673,4.5974-.5643,5.5864.1917.649.495,1.033,1.478,1.144,3.116.2817,4.154-1.1559,4.28-3.791,4.28h-2.9394c-1.9633,0-3.2502-.8916-4.749-1.659-.6965-.3566-1.0754-1.1702-.812-1.9071.2674-.7483,1.0937-1.135,1.8396-.861l1.9846.7292-2.4151-5.261c-.3579-.7796-.0401-1.7028.7219-2.0969.8164-.4223,1.8201-.0746,2.2004.7622l1.2296,2.7059Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DrawFinger;
