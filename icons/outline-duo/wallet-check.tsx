import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletCheck({
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
          d="m14.75,6.75H4.25c-1.105,0-2-.895-2-2v3.3676c.0324.0863.1692.1198.2551.0953.4756-.1357.9763-.211,1.4949-.211,3.0327,0,5.5,2.4673,5.5,5.5,0,.5262-.0774,1.0338-.2169,1.5156-.0226.0782.0188.2324.1443.2324h5.3225c.552,0,1-.448,1-1v-6.5c0-.552-.448-1-1-1Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m10.0009,15.25h4.7491c.552,0,1-.448,1-1v-6.5c0-.552-.448-1-1-1H4.25c-1.105,0-2-.895-2-2v2.7516"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2.25,4.75c0-1.105.895-2,2-2h8.5c.552,0,1,.448,1,1v.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.5,12c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4,9.502c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm2.3076,3.252l-2.25,2.5c-.1377.1528-.332.2422-.5381.2476-.0068.0005-.0127.0005-.0195.0005-.1982,0-.3896-.0786-.5303-.2197l-1.25-1.25c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l.6914.6909,1.7207-1.9126c.2783-.3066.751-.332,1.0596-.0557.3076.2773.333.7515.0557,1.0596Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WalletCheck;
