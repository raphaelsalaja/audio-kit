import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFileEdit({
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
          d="m17.3653,11.2238l-.1677-.1677-.1677-.1677c-.6602-.6616-1.813-.6611-2.4751-.0005l-3.1612,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5722.1787.7748.1431.1431.3345.2197.5303.2197.082,0,.1646-.0131.2446-.041l2.6709-.9208c.1074-.0371.2051-.0982.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.4862,5.4253c.3309.33.5128.7699.5128,1.2368v2.3253c-.5555.1354-1.0792.4151-1.5037.8386l-3.1624,3.1623c-.2414.2414-.4245.5342-.5358.8565l-.9209,2.6708c-.0547.1587-.0909.3208-.1091.4835H3.75c-1.517,0-2.75-1.233-2.75-2.75V3.7491C1,2.2321,2.233.9991,3.75.9991h5.586c.467,0,.906.182,1.237.513l3.9132,3.9132Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m3.531,6.9451c-.126.216-.128.485-.003.702.124.217.358.352.608.352h2.659c.25,0,.483-.134.607-.352.124-.218.123-.486-.003-.701l-1.33-2.28c-.251-.43-.959-.428-1.208,0l-1.33,2.279Zm4.069,6.554c.496,0,.9-.404.9-.9v-1.7c0-.496-.404-.9-.9-.9h-1.699c-.496,0-.9.404-.9.9v1.7c0,.496.404.9.9.9h1.699Zm.9-5.5c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DesignFileEdit;
