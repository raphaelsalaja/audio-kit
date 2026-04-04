import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Apple({
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
        <path d="M19.61,4.808c1.035-1.294,1.737-3.032,1.552-4.808-1.515,.075-3.363,.999-4.433,2.295-.961,1.109-1.811,2.92-1.59,4.621,1.7,.147,3.399-.85,4.471-2.108" />
        <path d="M21.143,7.248c-2.469-.147-4.569,1.401-5.748,1.401s-2.986-1.327-4.939-1.292c-2.542,.037-4.901,1.475-6.191,3.761-2.653,4.573-.7,11.357,1.88,15.081,1.253,1.843,2.763,3.872,4.753,3.799,1.88-.074,2.617-1.217,4.902-1.217s2.947,1.217,4.937,1.18c2.064-.037,3.354-1.844,4.607-3.688,1.437-2.101,2.026-4.129,2.063-4.24-.037-.037-3.98-1.549-4.016-6.084-.037-3.797,3.095-5.603,3.243-5.716-1.769-2.616-4.533-2.911-5.491-2.985" />
      </g>
    </svg>
  );
}

export default Apple;
