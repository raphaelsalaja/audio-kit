import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hearts2({
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
          d="m11.746,11.79l-4.073,4.232c-.292.304-.779.304-1.071,0l-4.072-4.232c-1.079-1.136-1.032-2.931.103-4.01,1.136-1.079,2.931-1.032,4.01.103.201.211.368.452.495.715.798-1.644,2.974-2.17,4.464-.863.398.349.69.819.825,1.33.27,1.028-.025,2.035-.681,2.725Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11.746,11.79l-4.073,4.232c-.292.304-.779.304-1.071,0l-4.072-4.232c-1.079-1.136-1.032-2.931.103-4.01,1.136-1.079,2.931-1.032,4.01.103.201.211.368.452.495.715.798-1.644,2.974-2.17,4.464-.863.398.349.69.819.825,1.33.27,1.028-.025,2.035-.681,2.725Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.8813,7.1792l.6147-.6392c.656-.6899.951-1.697.681-2.7251-.134-.512-.427-.981-.825-1.3301-1.49-1.3069-3.666-.7808-4.464.863-.127-.262-.294-.5029-.495-.7148-1.079-1.136-2.874-1.1821-4.01-.104-.4573.4348-.7289.9856-.829,1.5627"
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

export default Hearts2;
