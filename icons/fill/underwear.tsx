import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Underwear({
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
          d="M16.671,6l-.104-1.381c-.068-.908-.835-1.619-1.745-1.619H3.178c-.91,0-1.677,.711-1.745,1.619l-.104,1.381h15.343Z"
          fill={secondaryfill}
        />
        <path
          d="M16.998,10.344l-.214-2.844h-4.763c.003,.523,.093,1.147,.405,1.802,.365,.766,.893,1.271,1.271,1.559,.027,.023,.351,.3,.959,.682,.518-.211,1.073-.349,1.653-.395,.411-.033,.72-.392,.688-.804Z"
          fill={fill}
        />
        <path
          d="M12.736,12.011c-.68-.515-1.272-1.243-1.663-2.063-.425-.89-.552-1.742-.556-2.448h-3.034c-.004,.706-.132,1.558-.556,2.448-.495,1.039-1.205,1.719-1.715,2.106-.007,.007-.161,.142-.444,.347,.793,.659,1.404,1.539,1.729,2.573,.099,.312,.388,.525,.716,.525h3.574c.328,0,.617-.213,.716-.525,.325-1.035,.937-1.915,1.731-2.574-.303-.219-.476-.369-.497-.389Z"
          fill={fill}
        />
        <path
          d="M5.979,7.5H1.216l-.214,2.844c-.031,.412,.277,.771,.688,.804,.581,.046,1.137,.185,1.655,.396,.593-.373,.902-.636,.908-.642,.427-.328,.953-.832,1.319-1.6,.313-.655,.402-1.279,.405-1.802Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Underwear;
